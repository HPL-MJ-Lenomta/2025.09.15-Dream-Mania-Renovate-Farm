var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointSpring' )
  var i703 = data
  i702.spring = i703[0]
  i702.damper = i703[1]
  i702.targetPosition = i703[2]
  return i702
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointMotor' )
  var i705 = data
  i704.m_TargetVelocity = i705[0]
  i704.m_Force = i705[1]
  i704.m_FreeSpin = i705[2]
  return i704
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.JointLimits' )
  var i707 = data
  i706.m_Min = i707[0]
  i706.m_Max = i707[1]
  i706.m_Bounciness = i707[2]
  i706.m_BounceMinVelocity = i707[3]
  i706.m_ContactDistance = i707[4]
  i706.minBounce = i707[5]
  i706.maxBounce = i707[6]
  return i706
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.JointDrive' )
  var i709 = data
  i708.m_PositionSpring = i709[0]
  i708.m_PositionDamper = i709[1]
  i708.m_MaximumForce = i709[2]
  i708.m_UseAcceleration = i709[3]
  return i708
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i711 = data
  i710.m_Spring = i711[0]
  i710.m_Damper = i711[1]
  return i710
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i713 = data
  i712.m_Limit = i713[0]
  i712.m_Bounciness = i713[1]
  i712.m_ContactDistance = i713[2]
  return i712
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i715 = data
  i714.m_ExtremumSlip = i715[0]
  i714.m_ExtremumValue = i715[1]
  i714.m_AsymptoteSlip = i715[2]
  i714.m_AsymptoteValue = i715[3]
  i714.m_Stiffness = i715[4]
  return i714
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i717 = data
  i716.m_LowerAngle = i717[0]
  i716.m_UpperAngle = i717[1]
  return i716
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i719 = data
  i718.m_MotorSpeed = i719[0]
  i718.m_MaximumMotorTorque = i719[1]
  return i718
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i721 = data
  i720.m_DampingRatio = i721[0]
  i720.m_Frequency = i721[1]
  i720.m_Angle = i721[2]
  return i720
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i723 = data
  i722.m_LowerTranslation = i723[0]
  i722.m_UpperTranslation = i723[1]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i725 = data
  i724.name = i725[0]
  i724.width = i725[1]
  i724.height = i725[2]
  i724.mipmapCount = i725[3]
  i724.anisoLevel = i725[4]
  i724.filterMode = i725[5]
  i724.hdr = !!i725[6]
  i724.format = i725[7]
  i724.wrapMode = i725[8]
  i724.alphaIsTransparency = !!i725[9]
  i724.alphaSource = i725[10]
  i724.graphicsFormat = i725[11]
  i724.sRGBTexture = !!i725[12]
  i724.desiredColorSpace = i725[13]
  i724.wrapU = i725[14]
  i724.wrapV = i725[15]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i727 = data
  i726.pivot = new pc.Vec2( i727[0], i727[1] )
  i726.anchorMin = new pc.Vec2( i727[2], i727[3] )
  i726.anchorMax = new pc.Vec2( i727[4], i727[5] )
  i726.sizeDelta = new pc.Vec2( i727[6], i727[7] )
  i726.anchoredPosition3D = new pc.Vec3( i727[8], i727[9], i727[10] )
  i726.rotation = new pc.Quat(i727[11], i727[12], i727[13], i727[14])
  i726.scale = new pc.Vec3( i727[15], i727[16], i727[17] )
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i729 = data
  i728.cullTransparentMesh = !!i729[0]
  return i728
}

Deserializers["Item"] = function (request, data, root) {
  var i730 = root || request.c( 'Item' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'itemImage')
  request.r(i731[2], i731[3], 0, i730, 'collectItemImage')
  request.r(i731[4], i731[5], 0, i730, 'itemCountText')
  i730.ItemCount = i731[6]
  request.r(i731[7], i731[8], 0, i730, 'completeSprite')
  request.r(i731[9], i731[10], 0, i730, 'data')
  request.r(i731[11], i731[12], 0, i730, 'UIMovement')
  request.r(i731[13], i731[14], 0, i730, 'FurnitureImage')
  return i730
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.Image' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'm_Sprite')
  i732.m_Type = i733[2]
  i732.m_PreserveAspect = !!i733[3]
  i732.m_FillCenter = !!i733[4]
  i732.m_FillMethod = i733[5]
  i732.m_FillAmount = i733[6]
  i732.m_FillClockwise = !!i733[7]
  i732.m_FillOrigin = i733[8]
  i732.m_UseSpriteMesh = !!i733[9]
  i732.m_PixelsPerUnitMultiplier = i733[10]
  request.r(i733[11], i733[12], 0, i732, 'm_Material')
  i732.m_Maskable = !!i733[13]
  i732.m_Color = new pc.Color(i733[14], i733[15], i733[16], i733[17])
  i732.m_RaycastTarget = !!i733[18]
  i732.m_RaycastPadding = new pc.Vec4( i733[19], i733[20], i733[21], i733[22] )
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i735 = data
  i734.name = i735[0]
  i734.tagId = i735[1]
  i734.enabled = !!i735[2]
  i734.isStatic = !!i735[3]
  i734.layer = i735[4]
  return i734
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i736 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i737 = data
  i736.m_hasFontAssetChanged = !!i737[0]
  request.r(i737[1], i737[2], 0, i736, 'm_baseMaterial')
  i736.m_maskOffset = new pc.Vec4( i737[3], i737[4], i737[5], i737[6] )
  i736.m_text = i737[7]
  i736.m_isRightToLeft = !!i737[8]
  request.r(i737[9], i737[10], 0, i736, 'm_fontAsset')
  request.r(i737[11], i737[12], 0, i736, 'm_sharedMaterial')
  var i739 = i737[13]
  var i738 = []
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 2, i738, '')
  }
  i736.m_fontSharedMaterials = i738
  request.r(i737[14], i737[15], 0, i736, 'm_fontMaterial')
  var i741 = i737[16]
  var i740 = []
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 2, i740, '')
  }
  i736.m_fontMaterials = i740
  i736.m_fontColor32 = UnityEngine.Color32.ConstructColor(i737[17], i737[18], i737[19], i737[20])
  i736.m_fontColor = new pc.Color(i737[21], i737[22], i737[23], i737[24])
  i736.m_enableVertexGradient = !!i737[25]
  i736.m_colorMode = i737[26]
  i736.m_fontColorGradient = request.d('TMPro.VertexGradient', i737[27], i736.m_fontColorGradient)
  request.r(i737[28], i737[29], 0, i736, 'm_fontColorGradientPreset')
  request.r(i737[30], i737[31], 0, i736, 'm_spriteAsset')
  i736.m_tintAllSprites = !!i737[32]
  request.r(i737[33], i737[34], 0, i736, 'm_StyleSheet')
  i736.m_TextStyleHashCode = i737[35]
  i736.m_overrideHtmlColors = !!i737[36]
  i736.m_faceColor = UnityEngine.Color32.ConstructColor(i737[37], i737[38], i737[39], i737[40])
  i736.m_fontSize = i737[41]
  i736.m_fontSizeBase = i737[42]
  i736.m_fontWeight = i737[43]
  i736.m_enableAutoSizing = !!i737[44]
  i736.m_fontSizeMin = i737[45]
  i736.m_fontSizeMax = i737[46]
  i736.m_fontStyle = i737[47]
  i736.m_HorizontalAlignment = i737[48]
  i736.m_VerticalAlignment = i737[49]
  i736.m_textAlignment = i737[50]
  i736.m_characterSpacing = i737[51]
  i736.m_wordSpacing = i737[52]
  i736.m_lineSpacing = i737[53]
  i736.m_lineSpacingMax = i737[54]
  i736.m_paragraphSpacing = i737[55]
  i736.m_charWidthMaxAdj = i737[56]
  i736.m_enableWordWrapping = !!i737[57]
  i736.m_wordWrappingRatios = i737[58]
  i736.m_overflowMode = i737[59]
  request.r(i737[60], i737[61], 0, i736, 'm_linkedTextComponent')
  request.r(i737[62], i737[63], 0, i736, 'parentLinkedComponent')
  i736.m_enableKerning = !!i737[64]
  i736.m_enableExtraPadding = !!i737[65]
  i736.checkPaddingRequired = !!i737[66]
  i736.m_isRichText = !!i737[67]
  i736.m_parseCtrlCharacters = !!i737[68]
  i736.m_isOrthographic = !!i737[69]
  i736.m_isCullingEnabled = !!i737[70]
  i736.m_horizontalMapping = i737[71]
  i736.m_verticalMapping = i737[72]
  i736.m_uvLineOffset = i737[73]
  i736.m_geometrySortingOrder = i737[74]
  i736.m_IsTextObjectScaleStatic = !!i737[75]
  i736.m_VertexBufferAutoSizeReduction = !!i737[76]
  i736.m_useMaxVisibleDescender = !!i737[77]
  i736.m_pageToDisplay = i737[78]
  i736.m_margin = new pc.Vec4( i737[79], i737[80], i737[81], i737[82] )
  i736.m_isUsingLegacyAnimationComponent = !!i737[83]
  i736.m_isVolumetricText = !!i737[84]
  request.r(i737[85], i737[86], 0, i736, 'm_Material')
  i736.m_Maskable = !!i737[87]
  i736.m_Color = new pc.Color(i737[88], i737[89], i737[90], i737[91])
  i736.m_RaycastTarget = !!i737[92]
  i736.m_RaycastPadding = new pc.Vec4( i737[93], i737[94], i737[95], i737[96] )
  return i736
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i744 = root || request.c( 'TMPro.VertexGradient' )
  var i745 = data
  i744.topLeft = new pc.Color(i745[0], i745[1], i745[2], i745[3])
  i744.topRight = new pc.Color(i745[4], i745[5], i745[6], i745[7])
  i744.bottomLeft = new pc.Color(i745[8], i745[9], i745[10], i745[11])
  i744.bottomRight = new pc.Color(i745[12], i745[13], i745[14], i745[15])
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i746 = root || new pc.UnityMaterial()
  var i747 = data
  i746.name = i747[0]
  request.r(i747[1], i747[2], 0, i746, 'shader')
  i746.renderQueue = i747[3]
  i746.enableInstancing = !!i747[4]
  var i749 = i747[5]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i749[i + 0]) );
  }
  i746.floatParameters = i748
  var i751 = i747[6]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i751[i + 0]) );
  }
  i746.colorParameters = i750
  var i753 = i747[7]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i753[i + 0]) );
  }
  i746.vectorParameters = i752
  var i755 = i747[8]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i755[i + 0]) );
  }
  i746.textureParameters = i754
  var i757 = i747[9]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i757[i + 0]) );
  }
  i746.materialFlags = i756
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i761 = data
  i760.name = i761[0]
  i760.value = i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i765 = data
  i764.name = i765[0]
  i764.value = new pc.Color(i765[1], i765[2], i765[3], i765[4])
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i769 = data
  i768.name = i769[0]
  i768.value = new pc.Vec4( i769[1], i769[2], i769[3], i769[4] )
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i773 = data
  i772.name = i773[0]
  request.r(i773[1], i773[2], 0, i772, 'value')
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i777 = data
  i776.name = i777[0]
  i776.enabled = !!i777[1]
  return i776
}

Deserializers["TileCell"] = function (request, data, root) {
  var i778 = root || request.c( 'TileCell' )
  var i779 = data
  i778.coordinate = new pc.Vec2( i779[0], i779[1] )
  request.r(i779[2], i779[3], 0, i778, 'tileData')
  request.r(i779[4], i779[5], 0, i778, 'tile')
  return i778
}

Deserializers["Tile"] = function (request, data, root) {
  var i780 = root || request.c( 'Tile' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'itemImage')
  request.r(i781[2], i781[3], 0, i780, 'tileData')
  i780.MovementMagnitude = i781[4]
  i780.MovementDuration = i781[5]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i783 = data
  i782.position = new pc.Vec3( i783[0], i783[1], i783[2] )
  i782.scale = new pc.Vec3( i783[3], i783[4], i783[5] )
  i782.rotation = new pc.Quat(i783[6], i783[7], i783[8], i783[9])
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i785 = data
  i784.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i785[0], i784.main)
  i784.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i785[1], i784.colorBySpeed)
  i784.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i785[2], i784.colorOverLifetime)
  i784.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i785[3], i784.emission)
  i784.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i785[4], i784.rotationBySpeed)
  i784.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i785[5], i784.rotationOverLifetime)
  i784.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i785[6], i784.shape)
  i784.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i785[7], i784.sizeBySpeed)
  i784.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i785[8], i784.sizeOverLifetime)
  i784.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i785[9], i784.textureSheetAnimation)
  i784.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i785[10], i784.velocityOverLifetime)
  i784.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i785[11], i784.noise)
  i784.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i785[12], i784.inheritVelocity)
  i784.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i785[13], i784.forceOverLifetime)
  i784.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i785[14], i784.limitVelocityOverLifetime)
  i784.useAutoRandomSeed = !!i785[15]
  i784.randomSeed = i785[16]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemMain()
  var i787 = data
  i786.duration = i787[0]
  i786.loop = !!i787[1]
  i786.prewarm = !!i787[2]
  i786.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[3], i786.startDelay)
  i786.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[4], i786.startLifetime)
  i786.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[5], i786.startSpeed)
  i786.startSize3D = !!i787[6]
  i786.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[7], i786.startSizeX)
  i786.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[8], i786.startSizeY)
  i786.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[9], i786.startSizeZ)
  i786.startRotation3D = !!i787[10]
  i786.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[11], i786.startRotationX)
  i786.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[12], i786.startRotationY)
  i786.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[13], i786.startRotationZ)
  i786.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i787[14], i786.startColor)
  i786.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[15], i786.gravityModifier)
  i786.simulationSpace = i787[16]
  request.r(i787[17], i787[18], 0, i786, 'customSimulationSpace')
  i786.simulationSpeed = i787[19]
  i786.useUnscaledTime = !!i787[20]
  i786.scalingMode = i787[21]
  i786.playOnAwake = !!i787[22]
  i786.maxParticles = i787[23]
  i786.emitterVelocityMode = i787[24]
  i786.stopAction = i787[25]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i788 = root || new pc.MinMaxCurve()
  var i789 = data
  i788.mode = i789[0]
  i788.curveMin = new pc.AnimationCurve( { keys_flow: i789[1] } )
  i788.curveMax = new pc.AnimationCurve( { keys_flow: i789[2] } )
  i788.curveMultiplier = i789[3]
  i788.constantMin = i789[4]
  i788.constantMax = i789[5]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i790 = root || new pc.MinMaxGradient()
  var i791 = data
  i790.mode = i791[0]
  i790.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i791[1], i790.gradientMin)
  i790.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i791[2], i790.gradientMax)
  i790.colorMin = new pc.Color(i791[3], i791[4], i791[5], i791[6])
  i790.colorMax = new pc.Color(i791[7], i791[8], i791[9], i791[10])
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i793 = data
  i792.mode = i793[0]
  var i795 = i793[1]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i795[i + 0]) );
  }
  i792.colorKeys = i794
  var i797 = i793[2]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i797[i + 0]) );
  }
  i792.alphaKeys = i796
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemColorBySpeed()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i799[1], i798.color)
  i798.range = new pc.Vec2( i799[2], i799[3] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i803 = data
  i802.color = new pc.Color(i803[0], i803[1], i803[2], i803[3])
  i802.time = i803[4]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i807 = data
  i806.alpha = i807[0]
  i806.time = i807[1]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemColorOverLifetime()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i809[1], i808.color)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemEmitter()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.rateOverTime)
  i810.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.rateOverDistance)
  var i813 = i811[3]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i813[i + 0]) );
  }
  i810.bursts = i812
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemBurst()
  var i817 = data
  i816.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[0], i816.count)
  i816.cycleCount = i817[1]
  i816.minCount = i817[2]
  i816.maxCount = i817[3]
  i816.repeatInterval = i817[4]
  i816.time = i817[5]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemRotationBySpeed()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[1], i818.x)
  i818.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.y)
  i818.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.z)
  i818.separateAxes = !!i819[4]
  i818.range = new pc.Vec2( i819[5], i819[6] )
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemRotationOverLifetime()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[1], i820.x)
  i820.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.y)
  i820.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[3], i820.z)
  i820.separateAxes = !!i821[4]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemShape()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.shapeType = i823[1]
  i822.randomDirectionAmount = i823[2]
  i822.sphericalDirectionAmount = i823[3]
  i822.randomPositionAmount = i823[4]
  i822.alignToDirection = !!i823[5]
  i822.radius = i823[6]
  i822.radiusMode = i823[7]
  i822.radiusSpread = i823[8]
  i822.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[9], i822.radiusSpeed)
  i822.radiusThickness = i823[10]
  i822.angle = i823[11]
  i822.length = i823[12]
  i822.boxThickness = new pc.Vec3( i823[13], i823[14], i823[15] )
  i822.meshShapeType = i823[16]
  request.r(i823[17], i823[18], 0, i822, 'mesh')
  request.r(i823[19], i823[20], 0, i822, 'meshRenderer')
  request.r(i823[21], i823[22], 0, i822, 'skinnedMeshRenderer')
  i822.useMeshMaterialIndex = !!i823[23]
  i822.meshMaterialIndex = i823[24]
  i822.useMeshColors = !!i823[25]
  i822.normalOffset = i823[26]
  i822.arc = i823[27]
  i822.arcMode = i823[28]
  i822.arcSpread = i823[29]
  i822.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[30], i822.arcSpeed)
  i822.donutRadius = i823[31]
  i822.position = new pc.Vec3( i823[32], i823[33], i823[34] )
  i822.rotation = new pc.Vec3( i823[35], i823[36], i823[37] )
  i822.scale = new pc.Vec3( i823[38], i823[39], i823[40] )
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemSizeBySpeed()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[1], i824.x)
  i824.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.y)
  i824.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[3], i824.z)
  i824.separateAxes = !!i825[4]
  i824.range = new pc.Vec2( i825[5], i825[6] )
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemSizeOverLifetime()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.x)
  i826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.y)
  i826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.z)
  i826.separateAxes = !!i827[4]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.mode = i829[1]
  i828.animation = i829[2]
  i828.numTilesX = i829[3]
  i828.numTilesY = i829[4]
  i828.useRandomRow = !!i829[5]
  i828.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[6], i828.frameOverTime)
  i828.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[7], i828.startFrame)
  i828.cycleCount = i829[8]
  i828.rowIndex = i829[9]
  i828.flipU = i829[10]
  i828.flipV = i829[11]
  i828.spriteCount = i829[12]
  var i831 = i829[13]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.sprites = i830
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[1], i834.x)
  i834.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[2], i834.y)
  i834.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[3], i834.z)
  i834.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[4], i834.radial)
  i834.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[5], i834.speedModifier)
  i834.space = i835[6]
  i834.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[7], i834.orbitalX)
  i834.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[8], i834.orbitalY)
  i834.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[9], i834.orbitalZ)
  i834.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[10], i834.orbitalOffsetX)
  i834.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[11], i834.orbitalOffsetY)
  i834.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[12], i834.orbitalOffsetZ)
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i836 = root || new pc.ParticleSystemNoise()
  var i837 = data
  i836.enabled = !!i837[0]
  i836.separateAxes = !!i837[1]
  i836.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[2], i836.strengthX)
  i836.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[3], i836.strengthY)
  i836.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[4], i836.strengthZ)
  i836.frequency = i837[5]
  i836.damping = !!i837[6]
  i836.octaveCount = i837[7]
  i836.octaveMultiplier = i837[8]
  i836.octaveScale = i837[9]
  i836.quality = i837[10]
  i836.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[11], i836.scrollSpeed)
  i836.scrollSpeedMultiplier = i837[12]
  i836.remapEnabled = !!i837[13]
  i836.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[14], i836.remapX)
  i836.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[15], i836.remapY)
  i836.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[16], i836.remapZ)
  i836.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[17], i836.positionAmount)
  i836.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[18], i836.rotationAmount)
  i836.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[19], i836.sizeAmount)
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i838 = root || new pc.ParticleSystemInheritVelocity()
  var i839 = data
  i838.enabled = !!i839[0]
  i838.mode = i839[1]
  i838.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[2], i838.curve)
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemForceOverLifetime()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[1], i840.x)
  i840.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[2], i840.y)
  i840.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[3], i840.z)
  i840.space = i841[4]
  i840.randomized = !!i841[5]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[1], i842.limit)
  i842.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[2], i842.limitX)
  i842.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[3], i842.limitY)
  i842.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[4], i842.limitZ)
  i842.dampen = i843[5]
  i842.separateAxes = !!i843[6]
  i842.space = i843[7]
  i842.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[8], i842.drag)
  i842.multiplyDragByParticleSize = !!i843[9]
  i842.multiplyDragByParticleVelocity = !!i843[10]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i845 = data
  i844.enabled = !!i845[0]
  request.r(i845[1], i845[2], 0, i844, 'sharedMaterial')
  var i847 = i845[3]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i844.sharedMaterials = i846
  i844.receiveShadows = !!i845[4]
  i844.shadowCastingMode = i845[5]
  i844.sortingLayerID = i845[6]
  i844.sortingOrder = i845[7]
  i844.lightmapIndex = i845[8]
  i844.lightmapSceneIndex = i845[9]
  i844.lightmapScaleOffset = new pc.Vec4( i845[10], i845[11], i845[12], i845[13] )
  i844.lightProbeUsage = i845[14]
  i844.reflectionProbeUsage = i845[15]
  request.r(i845[16], i845[17], 0, i844, 'mesh')
  i844.meshCount = i845[18]
  i844.activeVertexStreamsCount = i845[19]
  i844.alignment = i845[20]
  i844.renderMode = i845[21]
  i844.sortMode = i845[22]
  i844.lengthScale = i845[23]
  i844.velocityScale = i845[24]
  i844.cameraVelocityScale = i845[25]
  i844.normalDirection = i845[26]
  i844.sortingFudge = i845[27]
  i844.minParticleSize = i845[28]
  i844.maxParticleSize = i845[29]
  i844.pivot = new pc.Vec3( i845[30], i845[31], i845[32] )
  request.r(i845[33], i845[34], 0, i844, 'trailMaterial')
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i849 = data
  i848.enabled = !!i849[0]
  i848.type = i849[1]
  i848.color = new pc.Color(i849[2], i849[3], i849[4], i849[5])
  i848.cullingMask = i849[6]
  i848.intensity = i849[7]
  i848.range = i849[8]
  i848.spotAngle = i849[9]
  i848.shadows = i849[10]
  i848.shadowNormalBias = i849[11]
  i848.shadowBias = i849[12]
  i848.shadowStrength = i849[13]
  i848.shadowResolution = i849[14]
  i848.lightmapBakeType = i849[15]
  i848.renderMode = i849[16]
  request.r(i849[17], i849[18], 0, i848, 'cookie')
  i848.cookieSize = i849[19]
  return i848
}

Deserializers["CartoonFX.CFXR_Effect"] = function (request, data, root) {
  var i850 = root || request.c( 'CartoonFX.CFXR_Effect' )
  var i851 = data
  i850.clearBehavior = i851[0]
  i850.cameraShake = request.d('CartoonFX.CFXR_Effect+CameraShake', i851[1], i850.cameraShake)
  var i853 = i851[2]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('CartoonFX.CFXR_Effect+AnimatedLight', i853[i + 0]) );
  }
  i850.animatedLights = i852
  request.r(i851[3], i851[4], 0, i850, 'fadeOutReference')
  return i850
}

Deserializers["CartoonFX.CFXR_Effect+CameraShake"] = function (request, data, root) {
  var i854 = root || request.c( 'CartoonFX.CFXR_Effect+CameraShake' )
  var i855 = data
  i854.camEnabled = !!i855[0]
  i854.useMainCamera = !!i855[1]
  var i857 = i855[2]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 1, i856, '')
  }
  i854.cameras = i856
  i854.delay = i855[3]
  i854.duration = i855[4]
  i854.shakeSpace = i855[5]
  i854.shakeStrength = new pc.Vec3( i855[6], i855[7], i855[8] )
  i854.shakeCurve = new pc.AnimationCurve( { keys_flow: i855[9] } )
  i854.shakesDelay = i855[10]
  return i854
}

Deserializers["CartoonFX.CFXR_Effect+AnimatedLight"] = function (request, data, root) {
  var i862 = root || request.c( 'CartoonFX.CFXR_Effect+AnimatedLight' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'light')
  i862.loop = !!i863[2]
  i862.animateIntensity = !!i863[3]
  i862.intensityStart = i863[4]
  i862.intensityEnd = i863[5]
  i862.intensityDuration = i863[6]
  i862.intensityCurve = new pc.AnimationCurve( { keys_flow: i863[7] } )
  i862.perlinIntensity = !!i863[8]
  i862.perlinIntensitySpeed = i863[9]
  i862.fadeIn = !!i863[10]
  i862.fadeInDuration = i863[11]
  i862.fadeOut = !!i863[12]
  i862.fadeOutDuration = i863[13]
  i862.animateRange = !!i863[14]
  i862.rangeStart = i863[15]
  i862.rangeEnd = i863[16]
  i862.rangeDuration = i863[17]
  i862.rangeCurve = new pc.AnimationCurve( { keys_flow: i863[18] } )
  i862.perlinRange = !!i863[19]
  i862.perlinRangeSpeed = i863[20]
  i862.animateColor = !!i863[21]
  i862.colorGradient = i863[22] ? new pc.ColorGradient(i863[22][0], i863[22][1], i863[22][2]) : null
  i862.colorDuration = i863[23]
  i862.colorCurve = new pc.AnimationCurve( { keys_flow: i863[24] } )
  i862.perlinColor = !!i863[25]
  i862.perlinColorSpeed = i863[26]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i865 = data
  i864.name = i865[0]
  i864.halfPrecision = !!i865[1]
  i864.useUInt32IndexFormat = !!i865[2]
  i864.vertexCount = i865[3]
  i864.aabb = i865[4]
  var i867 = i865[5]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( !!i867[i + 0] );
  }
  i864.streams = i866
  i864.vertices = i865[6]
  var i869 = i865[7]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i869[i + 0]) );
  }
  i864.subMeshes = i868
  var i871 = i865[8]
  var i870 = []
  for(var i = 0; i < i871.length; i += 16) {
    i870.push( new pc.Mat4().setData(i871[i + 0], i871[i + 1], i871[i + 2], i871[i + 3],  i871[i + 4], i871[i + 5], i871[i + 6], i871[i + 7],  i871[i + 8], i871[i + 9], i871[i + 10], i871[i + 11],  i871[i + 12], i871[i + 13], i871[i + 14], i871[i + 15]) );
  }
  i864.bindposes = i870
  var i873 = i865[9]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i873[i + 0]) );
  }
  i864.blendShapes = i872
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i879 = data
  i878.triangles = i879[0]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i885 = data
  i884.name = i885[0]
  var i887 = i885[1]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i887[i + 0]) );
  }
  i884.frames = i886
  return i884
}

Deserializers["AnimatedTile"] = function (request, data, root) {
  var i888 = root || request.c( 'AnimatedTile' )
  var i889 = data
  i888.Duration = i889[0]
  request.r(i889[1], i889[2], 0, i888, 'tileData')
  var i891 = i889[3]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i891.length; i += 3) {
    i890.add(new pc.Vec3( i891[i + 0], i891[i + 1], i891[i + 2] ));
  }
  i888.targetPos = i890
  var i893 = i889[4]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(i893[i + 0]);
  }
  i888.targets = i892
  request.r(i889[5], i889[6], 0, i888, 'image')
  var i895 = i889[7]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 1, i894, '')
  }
  i888.vfxParticles = i894
  request.r(i889[8], i889[9], 0, i888, 'trailVFXPrefab')
  request.r(i889[10], i889[11], 0, i888, 'circleTrailVFXPrefab')
  request.r(i889[12], i889[13], 0, i888, 'trailRenderer')
  return i888
}

Deserializers["StateEvents"] = function (request, data, root) {
  var i902 = root || request.c( 'StateEvents' )
  var i903 = data
  i902.OnEnableEvent = request.d('UnityEngine.Events.UnityEvent', i903[0], i902.OnEnableEvent)
  i902.OnDisableEvent = request.d('UnityEngine.Events.UnityEvent', i903[1], i902.OnDisableEvent)
  i902.OnStartEvent = request.d('UnityEngine.Events.UnityEvent', i903[2], i902.OnStartEvent)
  i902.autoEnable = !!i903[3]
  i902.autoEnableDelay = i903[4]
  i902.autoDisableDelay = i903[5]
  return i902
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i905 = data
  i904.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i905[0], i904.m_PersistentCalls)
  return i904
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i907 = data
  var i909 = i907[0]
  var i908 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i909.length; i += 1) {
    i908.add(request.d('UnityEngine.Events.PersistentCall', i909[i + 0]));
  }
  i906.m_Calls = i908
  return i906
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'm_Target')
  i912.m_TargetAssemblyTypeName = i913[2]
  i912.m_MethodName = i913[3]
  i912.m_Mode = i913[4]
  i912.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i913[5], i912.m_Arguments)
  i912.m_CallState = i913[6]
  return i912
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'm_ObjectArgument')
  i914.m_ObjectArgumentAssemblyTypeName = i915[2]
  i914.m_IntArgument = i915[3]
  i914.m_FloatArgument = i915[4]
  i914.m_StringArgument = i915[5]
  i914.m_BoolArgument = !!i915[6]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i917 = data
  i916.enabled = !!i917[0]
  request.r(i917[1], i917[2], 0, i916, 'sharedMaterial')
  var i919 = i917[3]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i916.sharedMaterials = i918
  i916.receiveShadows = !!i917[4]
  i916.shadowCastingMode = i917[5]
  i916.sortingLayerID = i917[6]
  i916.sortingOrder = i917[7]
  i916.lightmapIndex = i917[8]
  i916.lightmapSceneIndex = i917[9]
  i916.lightmapScaleOffset = new pc.Vec4( i917[10], i917[11], i917[12], i917[13] )
  i916.lightProbeUsage = i917[14]
  i916.reflectionProbeUsage = i917[15]
  var i921 = i917[16]
  var i920 = []
  for(var i = 0; i < i921.length; i += 3) {
    i920.push( new pc.Vec3( i921[i + 0], i921[i + 1], i921[i + 2] ) );
  }
  i916.positions = i920
  i916.positionCount = i917[17]
  i916.time = i917[18]
  i916.startWidth = i917[19]
  i916.endWidth = i917[20]
  i916.widthMultiplier = i917[21]
  i916.autodestruct = !!i917[22]
  i916.emitting = !!i917[23]
  i916.numCornerVertices = i917[24]
  i916.numCapVertices = i917[25]
  i916.minVertexDistance = i917[26]
  i916.colorGradient = i917[27] ? new pc.ColorGradient(i917[27][0], i917[27][1], i917[27][2]) : null
  i916.startColor = new pc.Color(i917[28], i917[29], i917[30], i917[31])
  i916.endColor = new pc.Color(i917[32], i917[33], i917[34], i917[35])
  i916.generateLightingData = !!i917[36]
  i916.textureMode = i917[37]
  i916.alignment = i917[38]
  i916.widthCurve = new pc.AnimationCurve( { keys_flow: i917[39] } )
  return i916
}

Deserializers["PositionTracking"] = function (request, data, root) {
  var i924 = root || request.c( 'PositionTracking' )
  var i925 = data
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i927 = data
  i926.name = i927[0]
  i926.index = i927[1]
  i926.startup = !!i927[2]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i929 = data
  i928.enabled = !!i929[0]
  i928.aspect = i929[1]
  i928.orthographic = !!i929[2]
  i928.orthographicSize = i929[3]
  i928.backgroundColor = new pc.Color(i929[4], i929[5], i929[6], i929[7])
  i928.nearClipPlane = i929[8]
  i928.farClipPlane = i929[9]
  i928.fieldOfView = i929[10]
  i928.depth = i929[11]
  i928.clearFlags = i929[12]
  i928.cullingMask = i929[13]
  i928.rect = i929[14]
  request.r(i929[15], i929[16], 0, i928, 'targetTexture')
  i928.usePhysicalProperties = !!i929[17]
  i928.focalLength = i929[18]
  i928.sensorSize = new pc.Vec2( i929[19], i929[20] )
  i928.lensShift = new pc.Vec2( i929[21], i929[22] )
  i928.gateFit = i929[23]
  i928.commandBufferCount = i929[24]
  i928.cameraType = i929[25]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i931 = data
  i930.enabled = !!i931[0]
  i930.planeDistance = i931[1]
  i930.referencePixelsPerUnit = i931[2]
  i930.isFallbackOverlay = !!i931[3]
  i930.renderMode = i931[4]
  i930.renderOrder = i931[5]
  i930.sortingLayerName = i931[6]
  i930.sortingOrder = i931[7]
  i930.scaleFactor = i931[8]
  request.r(i931[9], i931[10], 0, i930, 'worldCamera')
  i930.overrideSorting = !!i931[11]
  i930.pixelPerfect = !!i931[12]
  i930.targetDisplay = i931[13]
  i930.overridePixelPerfect = !!i931[14]
  return i930
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i933 = data
  i932.m_UiScaleMode = i933[0]
  i932.m_ReferencePixelsPerUnit = i933[1]
  i932.m_ScaleFactor = i933[2]
  i932.m_ReferenceResolution = new pc.Vec2( i933[3], i933[4] )
  i932.m_ScreenMatchMode = i933[5]
  i932.m_MatchWidthOrHeight = i933[6]
  i932.m_PhysicalUnit = i933[7]
  i932.m_FallbackScreenDPI = i933[8]
  i932.m_DefaultSpriteDPI = i933[9]
  i932.m_DynamicPixelsPerUnit = i933[10]
  i932.m_PresetInfoIsWorld = !!i933[11]
  return i932
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i935 = data
  i934.m_IgnoreReversedGraphics = !!i935[0]
  i934.m_BlockingObjects = i935[1]
  i934.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i935[2] )
  return i934
}

Deserializers["BasicFade"] = function (request, data, root) {
  var i936 = root || request.c( 'BasicFade' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'canvasGroup')
  i936.duration = i937[2]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i939 = data
  i938.m_Alpha = i939[0]
  i938.m_Interactable = !!i939[1]
  i938.m_BlocksRaycasts = !!i939[2]
  i938.m_IgnoreParentGroups = !!i939[3]
  i938.enabled = !!i939[4]
  return i938
}

Deserializers["AppearAnimation"] = function (request, data, root) {
  var i940 = root || request.c( 'AppearAnimation' )
  var i941 = data
  i940.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i941[0], i940.OnMovementComplete)
  i940.fadeInDuration = i941[1]
  i940.fadeInDelay = i941[2]
  i940.fillDuration = i941[3]
  i940.fillDelay = i941[4]
  i940.targetFillAmount = i941[5]
  i940.initialFillAmount = i941[6]
  return i940
}

Deserializers["PlayerGuide"] = function (request, data, root) {
  var i942 = root || request.c( 'PlayerGuide' )
  var i943 = data
  var i945 = i943[0]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 1, i944, '')
  }
  i942.prompts = i944
  return i942
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.Button' )
  var i949 = data
  i948.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i949[0], i948.m_OnClick)
  i948.m_Navigation = request.d('UnityEngine.UI.Navigation', i949[1], i948.m_Navigation)
  i948.m_Transition = i949[2]
  i948.m_Colors = request.d('UnityEngine.UI.ColorBlock', i949[3], i948.m_Colors)
  i948.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i949[4], i948.m_SpriteState)
  i948.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i949[5], i948.m_AnimationTriggers)
  i948.m_Interactable = !!i949[6]
  request.r(i949[7], i949[8], 0, i948, 'm_TargetGraphic')
  return i948
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i951 = data
  i950.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i951[0], i950.m_PersistentCalls)
  return i950
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i953 = data
  i952.m_Mode = i953[0]
  i952.m_WrapAround = !!i953[1]
  request.r(i953[2], i953[3], 0, i952, 'm_SelectOnUp')
  request.r(i953[4], i953[5], 0, i952, 'm_SelectOnDown')
  request.r(i953[6], i953[7], 0, i952, 'm_SelectOnLeft')
  request.r(i953[8], i953[9], 0, i952, 'm_SelectOnRight')
  return i952
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i955 = data
  i954.m_NormalColor = new pc.Color(i955[0], i955[1], i955[2], i955[3])
  i954.m_HighlightedColor = new pc.Color(i955[4], i955[5], i955[6], i955[7])
  i954.m_PressedColor = new pc.Color(i955[8], i955[9], i955[10], i955[11])
  i954.m_SelectedColor = new pc.Color(i955[12], i955[13], i955[14], i955[15])
  i954.m_DisabledColor = new pc.Color(i955[16], i955[17], i955[18], i955[19])
  i954.m_ColorMultiplier = i955[20]
  i954.m_FadeDuration = i955[21]
  return i954
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'm_HighlightedSprite')
  request.r(i957[2], i957[3], 0, i956, 'm_PressedSprite')
  request.r(i957[4], i957[5], 0, i956, 'm_SelectedSprite')
  request.r(i957[6], i957[7], 0, i956, 'm_DisabledSprite')
  return i956
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i959 = data
  i958.m_NormalTrigger = i959[0]
  i958.m_HighlightedTrigger = i959[1]
  i958.m_PressedTrigger = i959[2]
  i958.m_SelectedTrigger = i959[3]
  i958.m_DisabledTrigger = i959[4]
  return i958
}

Deserializers["RectAnimator"] = function (request, data, root) {
  var i960 = root || request.c( 'RectAnimator' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'rectTransform')
  i960.animateScale = !!i961[2]
  i960.isScaleLooping = !!i961[3]
  i960.scaleTo = i961[4]
  i960.scaleDuration = i961[5]
  i960.scaleEaseType = i961[6]
  i960.scaleStartDelay = i961[7]
  i960.animateMove = !!i961[8]
  i960.isMoveLooping = !!i961[9]
  i960.moveTo = new pc.Vec2( i961[10], i961[11] )
  i960.moveDuration = i961[12]
  i960.moveEaseType = i961[13]
  i960.moveLoopType = i961[14]
  i960.moveStartDelay = i961[15]
  i960.initialPos = new pc.Vec3( i961[16], i961[17], i961[18] )
  i960.initialScale = new pc.Vec3( i961[19], i961[20], i961[21] )
  return i960
}

Deserializers["TileManager"] = function (request, data, root) {
  var i962 = root || request.c( 'TileManager' )
  var i963 = data
  i962.cellWidth = i963[0]
  i962.cellHeight = i963[1]
  request.r(i963[2], i963[3], 0, i962, 'canvasGroup')
  var i965 = i963[4]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 1, i964, '')
  }
  i962.cells = i964
  var i967 = i963[5]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 1, i966, '')
  }
  i962.tileDataPool = i966
  i962.GridHeight = i963[6]
  i962.SequenceDelay = i963[7]
  i962.BreakDelay = i963[8]
  i962.FallDelay = i963[9]
  i962.CheckDelay = i963[10]
  i962.levelColorValues = i963[11]
  var i969 = i963[12]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 1, i968, '')
  }
  i962.powerupDataPool = i968
  request.r(i963[13], i963[14], 0, i962, 'dynamitePowerup')
  return i962
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i975 = data
  i974.m_Spacing = i975[0]
  i974.m_ChildForceExpandWidth = !!i975[1]
  i974.m_ChildForceExpandHeight = !!i975[2]
  i974.m_ChildControlWidth = !!i975[3]
  i974.m_ChildControlHeight = !!i975[4]
  i974.m_ChildScaleWidth = !!i975[5]
  i974.m_ChildScaleHeight = !!i975[6]
  i974.m_ReverseArrangement = !!i975[7]
  i974.m_Padding = UnityEngine.RectOffset.FromPaddings(i975[8], i975[9], i975[10], i975[11])
  i974.m_ChildAlignment = i975[12]
  return i974
}

Deserializers["UIMoveTo"] = function (request, data, root) {
  var i976 = root || request.c( 'UIMoveTo' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'imageTransform')
  i976.targetPosition = new pc.Vec2( i977[2], i977[3] )
  i976.anticipationOffset = i977[4]
  i976.duration = i977[5]
  i976.enableOnStart = !!i977[6]
  i976.delayBeforeStart = i977[7]
  i976.delayBeforeEnd = i977[8]
  i976.OnMovementStart = request.d('UnityEngine.Events.UnityEvent', i977[9], i976.OnMovementStart)
  i976.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i977[10], i976.OnMovementComplete)
  var i979 = i977[11]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 1, i978, '')
  }
  i976.objectsToEnable = i978
  return i976
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i981 = data
  i980.m_StartCorner = i981[0]
  i980.m_StartAxis = i981[1]
  i980.m_CellSize = new pc.Vec2( i981[2], i981[3] )
  i980.m_Spacing = new pc.Vec2( i981[4], i981[5] )
  i980.m_Constraint = i981[6]
  i980.m_ConstraintCount = i981[7]
  i980.m_Padding = UnityEngine.RectOffset.FromPaddings(i981[8], i981[9], i981[10], i981[11])
  i980.m_ChildAlignment = i981[12]
  return i980
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.UI.Mask' )
  var i983 = data
  i982.m_ShowMaskGraphic = !!i983[0]
  return i982
}

Deserializers["AnimatedTileSpawner"] = function (request, data, root) {
  var i984 = root || request.c( 'AnimatedTileSpawner' )
  var i985 = data
  var i987 = i985[0]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('AnimatedTile')))
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 1, i986, '')
  }
  i984.tiles = i986
  return i984
}

Deserializers["DynamiteEffect"] = function (request, data, root) {
  var i990 = root || request.c( 'DynamiteEffect' )
  var i991 = data
  i990.initialScale = new pc.Vec3( i991[0], i991[1], i991[2] )
  i990.targetPos = new pc.Vec3( i991[3], i991[4], i991[5] )
  i990.duration = i991[6]
  request.r(i991[7], i991[8], 0, i990, 'model')
  request.r(i991[9], i991[10], 0, i990, 'explosionEffectPrefab')
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i993 = data
  i992.enabled = !!i993[0]
  request.r(i993[1], i993[2], 0, i992, 'sharedMaterial')
  var i995 = i993[3]
  var i994 = []
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 2, i994, '')
  }
  i992.sharedMaterials = i994
  i992.receiveShadows = !!i993[4]
  i992.shadowCastingMode = i993[5]
  i992.sortingLayerID = i993[6]
  i992.sortingOrder = i993[7]
  i992.lightmapIndex = i993[8]
  i992.lightmapSceneIndex = i993[9]
  i992.lightmapScaleOffset = new pc.Vec4( i993[10], i993[11], i993[12], i993[13] )
  i992.lightProbeUsage = i993[14]
  i992.reflectionProbeUsage = i993[15]
  i992.color = new pc.Color(i993[16], i993[17], i993[18], i993[19])
  request.r(i993[20], i993[21], 0, i992, 'sprite')
  i992.flipX = !!i993[22]
  i992.flipY = !!i993[23]
  i992.drawMode = i993[24]
  i992.size = new pc.Vec2( i993[25], i993[26] )
  i992.tileMode = i993[27]
  i992.adaptiveModeThreshold = i993[28]
  i992.maskInteraction = i993[29]
  i992.spriteSortPoint = i993[30]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'animatorController')
  request.r(i997[2], i997[3], 0, i996, 'avatar')
  i996.updateMode = i997[4]
  i996.hasTransformHierarchy = !!i997[5]
  i996.applyRootMotion = !!i997[6]
  var i999 = i997[7]
  var i998 = []
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 2, i998, '')
  }
  i996.humanBones = i998
  i996.enabled = !!i997[8]
  return i996
}

Deserializers["MergeHands"] = function (request, data, root) {
  var i1002 = root || request.c( 'MergeHands' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'rectTransform')
  request.r(i1003[2], i1003[3], 0, i1002, 'target1')
  request.r(i1003[4], i1003[5], 0, i1002, 'target2')
  return i1002
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'm_FirstSelected')
  i1004.m_sendNavigationEvents = !!i1005[2]
  i1004.m_DragThreshold = i1005[3]
  return i1004
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1007 = data
  i1006.m_HorizontalAxis = i1007[0]
  i1006.m_VerticalAxis = i1007[1]
  i1006.m_SubmitButton = i1007[2]
  i1006.m_CancelButton = i1007[3]
  i1006.m_InputActionsPerSecond = i1007[4]
  i1006.m_RepeatDelay = i1007[5]
  i1006.m_ForceModuleActive = !!i1007[6]
  i1006.m_SendPointerHoverToParent = !!i1007[7]
  return i1006
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1008 = root || request.c( 'GameManager' )
  var i1009 = data
  i1008.IsSIP = !!i1009[0]
  i1008.gameType = i1009[1]
  i1008.toggleInactivityPanel = !!i1009[2]
  i1008.OnStartMIP1 = request.d('UnityEngine.Events.UnityEvent', i1009[3], i1008.OnStartMIP1)
  i1008.OnStartMIP2 = request.d('UnityEngine.Events.UnityEvent', i1009[4], i1008.OnStartMIP2)
  i1008.IsDoneCollecting = !!i1009[5]
  i1008.OnLevelComplete = request.d('UnityEngine.Events.UnityEvent', i1009[6], i1008.OnLevelComplete)
  request.r(i1009[7], i1009[8], 0, i1008, 'TutorialPanel')
  request.r(i1009[9], i1009[10], 0, i1008, 'GamePanel')
  request.r(i1009[11], i1009[12], 0, i1008, 'EndCard')
  request.r(i1009[13], i1009[14], 0, i1008, 'CTAPanel')
  request.r(i1009[15], i1009[16], 0, i1008, 'FailPanel')
  request.r(i1009[17], i1009[18], 0, i1008, 'EndCardInActivityPanel')
  i1008.iosLink = i1009[19]
  i1008.androidLink = i1009[20]
  i1008.hasTimer = !!i1009[21]
  i1008.currentTimer = i1009[22]
  i1008.maxTime = i1009[23]
  i1008.gameOver = !!i1009[24]
  request.r(i1009[25], i1009[26], 0, i1008, 'inactivityPanel')
  request.r(i1009[27], i1009[28], 0, i1008, 'inactivityPanelGame')
  i1008.inactivityTime = i1009[29]
  i1008.inactivityTimer = i1009[30]
  request.r(i1009[31], i1009[32], 0, i1008, 'timerText')
  var i1011 = i1009[33]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.add(request.d('GameManager+FurnitureItems', i1011[i + 0]));
  }
  i1008.items = i1010
  i1008.CurrentLevel = i1009[34]
  var i1013 = i1009[35]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.add(request.d('GameManager+FurnitureItems', i1013[i + 0]));
  }
  i1008.currentFurnitures = i1012
  var i1015 = i1009[36]
  var i1014 = new (System.Collections.Generic.List$1(Bridge.ns('BasicFade')))
  for(var i = 0; i < i1015.length; i += 2) {
  request.r(i1015[i + 0], i1015[i + 1], 1, i1014, '')
  }
  i1008.gameBoards = i1014
  var i1017 = i1009[37]
  var i1016 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationBase')))
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 1, i1016, '')
  }
  i1008.furnitureDecorations = i1016
  var i1019 = i1009[38]
  var i1018 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1019.length; i += 2) {
  request.r(i1019[i + 0], i1019[i + 1], 1, i1018, '')
  }
  i1008.mip1Objects = i1018
  var i1021 = i1009[39]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 1, i1020, '')
  }
  i1008.mip2Objects = i1020
  var i1023 = i1009[40]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 1, i1022, '')
  }
  i1008.Feedback = i1022
  var i1025 = i1009[41]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.add(i1025[i + 0]);
  }
  i1008.audioKeys = i1024
  var i1027 = i1009[42]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.add(i1027[i + 0]);
  }
  i1008.cameraPanLocation = i1026
  request.r(i1009[43], i1009[44], 0, i1008, 'cameraPanObject')
  i1008.mip1ButtonPress = !!i1009[45]
  i1008.puzzlesToSolve = i1009[46]
  var i1029 = i1009[47]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1029.length; i += 2) {
  request.r(i1029[i + 0], i1029[i + 1], 1, i1028, '')
  }
  i1008.redirectButtons = i1028
  return i1008
}

Deserializers["GameManager+FurnitureItems"] = function (request, data, root) {
  var i1032 = root || request.c( 'GameManager+FurnitureItems' )
  var i1033 = data
  i1032.key = i1033[0]
  request.r(i1033[1], i1033[2], 0, i1032, 'value')
  return i1032
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1040 = root || request.c( 'AudioManager' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'library')
  i1040.sfxPoolSize = i1041[2]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1043 = data
  i1042.ambientIntensity = i1043[0]
  i1042.reflectionIntensity = i1043[1]
  i1042.ambientMode = i1043[2]
  i1042.ambientLight = new pc.Color(i1043[3], i1043[4], i1043[5], i1043[6])
  i1042.ambientSkyColor = new pc.Color(i1043[7], i1043[8], i1043[9], i1043[10])
  i1042.ambientGroundColor = new pc.Color(i1043[11], i1043[12], i1043[13], i1043[14])
  i1042.ambientEquatorColor = new pc.Color(i1043[15], i1043[16], i1043[17], i1043[18])
  i1042.fogColor = new pc.Color(i1043[19], i1043[20], i1043[21], i1043[22])
  i1042.fogEndDistance = i1043[23]
  i1042.fogStartDistance = i1043[24]
  i1042.fogDensity = i1043[25]
  i1042.fog = !!i1043[26]
  request.r(i1043[27], i1043[28], 0, i1042, 'skybox')
  i1042.fogMode = i1043[29]
  var i1045 = i1043[30]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1045[i + 0]) );
  }
  i1042.lightmaps = i1044
  i1042.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1043[31], i1042.lightProbes)
  i1042.lightmapsMode = i1043[32]
  i1042.mixedBakeMode = i1043[33]
  i1042.environmentLightingMode = i1043[34]
  i1042.ambientProbe = new pc.SphericalHarmonicsL2(i1043[35])
  i1042.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1043[36])
  i1042.useReferenceAmbientProbe = !!i1043[37]
  request.r(i1043[38], i1043[39], 0, i1042, 'customReflection')
  request.r(i1043[40], i1043[41], 0, i1042, 'defaultReflection')
  i1042.defaultReflectionMode = i1043[42]
  i1042.defaultReflectionResolution = i1043[43]
  i1042.sunLightObjectId = i1043[44]
  i1042.pixelLightCount = i1043[45]
  i1042.defaultReflectionHDR = !!i1043[46]
  i1042.hasLightDataAsset = !!i1043[47]
  i1042.hasManualGenerate = !!i1043[48]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'lightmapColor')
  request.r(i1049[2], i1049[3], 0, i1048, 'lightmapDirection')
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1050 = root || new UnityEngine.LightProbes()
  var i1051 = data
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1057 = data
  var i1059 = i1057[0]
  var i1058 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1059[i + 0]));
  }
  i1056.ShaderCompilationErrors = i1058
  i1056.name = i1057[1]
  i1056.guid = i1057[2]
  var i1061 = i1057[3]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( i1061[i + 0] );
  }
  i1056.shaderDefinedKeywords = i1060
  var i1063 = i1057[4]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1063[i + 0]) );
  }
  i1056.passes = i1062
  var i1065 = i1057[5]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1065[i + 0]) );
  }
  i1056.usePasses = i1064
  var i1067 = i1057[6]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1067[i + 0]) );
  }
  i1056.defaultParameterValues = i1066
  request.r(i1057[7], i1057[8], 0, i1056, 'unityFallbackShader')
  i1056.readDepth = !!i1057[9]
  i1056.isCreatedByShaderGraph = !!i1057[10]
  i1056.compiled = !!i1057[11]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1071 = data
  i1070.shaderName = i1071[0]
  i1070.errorMessage = i1071[1]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1076 = root || new pc.UnityShaderPass()
  var i1077 = data
  i1076.id = i1077[0]
  i1076.subShaderIndex = i1077[1]
  i1076.name = i1077[2]
  i1076.passType = i1077[3]
  i1076.grabPassTextureName = i1077[4]
  i1076.usePass = !!i1077[5]
  i1076.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[6], i1076.zTest)
  i1076.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[7], i1076.zWrite)
  i1076.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[8], i1076.culling)
  i1076.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1077[9], i1076.blending)
  i1076.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1077[10], i1076.alphaBlending)
  i1076.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[11], i1076.colorWriteMask)
  i1076.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[12], i1076.offsetUnits)
  i1076.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[13], i1076.offsetFactor)
  i1076.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[14], i1076.stencilRef)
  i1076.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[15], i1076.stencilReadMask)
  i1076.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[16], i1076.stencilWriteMask)
  i1076.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1077[17], i1076.stencilOp)
  i1076.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1077[18], i1076.stencilOpFront)
  i1076.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1077[19], i1076.stencilOpBack)
  var i1079 = i1077[20]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1079[i + 0]) );
  }
  i1076.tags = i1078
  var i1081 = i1077[21]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( i1081[i + 0] );
  }
  i1076.passDefinedKeywords = i1080
  var i1083 = i1077[22]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1083[i + 0]) );
  }
  i1076.passDefinedKeywordGroups = i1082
  var i1085 = i1077[23]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1085[i + 0]) );
  }
  i1076.variants = i1084
  var i1087 = i1077[24]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1087[i + 0]) );
  }
  i1076.excludedVariants = i1086
  i1076.hasDepthReader = !!i1077[25]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1089 = data
  i1088.val = i1089[0]
  i1088.name = i1089[1]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1091 = data
  i1090.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[0], i1090.src)
  i1090.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[1], i1090.dst)
  i1090.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[2], i1090.op)
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1093 = data
  i1092.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[0], i1092.pass)
  i1092.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[1], i1092.fail)
  i1092.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[2], i1092.zFail)
  i1092.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[3], i1092.comp)
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1097 = data
  i1096.name = i1097[0]
  i1096.value = i1097[1]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1101 = data
  var i1103 = i1101[0]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( i1103[i + 0] );
  }
  i1100.keywords = i1102
  i1100.hasDiscard = !!i1101[1]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1107 = data
  i1106.passId = i1107[0]
  i1106.subShaderIndex = i1107[1]
  var i1109 = i1107[2]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( i1109[i + 0] );
  }
  i1106.keywords = i1108
  i1106.vertexProgram = i1107[3]
  i1106.fragmentProgram = i1107[4]
  i1106.exportedForWebGl2 = !!i1107[5]
  i1106.readDepth = !!i1107[6]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1113 = data
  request.r(i1113[0], i1113[1], 0, i1112, 'shader')
  i1112.pass = i1113[2]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1117 = data
  i1116.name = i1117[0]
  i1116.type = i1117[1]
  i1116.value = new pc.Vec4( i1117[2], i1117[3], i1117[4], i1117[5] )
  i1116.textureValue = i1117[6]
  i1116.shaderPropertyFlag = i1117[7]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1119 = data
  i1118.name = i1119[0]
  request.r(i1119[1], i1119[2], 0, i1118, 'texture')
  i1118.aabb = i1119[3]
  i1118.vertices = i1119[4]
  i1118.triangles = i1119[5]
  i1118.textureRect = UnityEngine.Rect.MinMaxRect(i1119[6], i1119[7], i1119[8], i1119[9])
  i1118.packedRect = UnityEngine.Rect.MinMaxRect(i1119[10], i1119[11], i1119[12], i1119[13])
  i1118.border = new pc.Vec4( i1119[14], i1119[15], i1119[16], i1119[17] )
  i1118.transparency = i1119[18]
  i1118.bounds = i1119[19]
  i1118.pixelsPerUnit = i1119[20]
  i1118.textureWidth = i1119[21]
  i1118.textureHeight = i1119[22]
  i1118.nativeSize = new pc.Vec2( i1119[23], i1119[24] )
  i1118.pivot = new pc.Vec2( i1119[25], i1119[26] )
  i1118.textureRectOffset = new pc.Vec2( i1119[27], i1119[28] )
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1121 = data
  i1120.name = i1121[0]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1123 = data
  i1122.name = i1123[0]
  i1122.wrapMode = i1123[1]
  i1122.isLooping = !!i1123[2]
  i1122.length = i1123[3]
  var i1125 = i1123[4]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1125[i + 0]) );
  }
  i1122.curves = i1124
  var i1127 = i1123[5]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1127[i + 0]) );
  }
  i1122.events = i1126
  i1122.halfPrecision = !!i1123[6]
  i1122._frameRate = i1123[7]
  i1122.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1123[8], i1122.localBounds)
  i1122.hasMuscleCurves = !!i1123[9]
  var i1129 = i1123[10]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( i1129[i + 0] );
  }
  i1122.clipMuscleConstant = i1128
  i1122.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1123[11], i1122.clipBindingConstant)
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1133 = data
  i1132.path = i1133[0]
  i1132.hash = i1133[1]
  i1132.componentType = i1133[2]
  i1132.property = i1133[3]
  i1132.keys = i1133[4]
  var i1135 = i1133[5]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1135[i + 0]) );
  }
  i1132.objectReferenceKeys = i1134
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1139 = data
  i1138.time = i1139[0]
  request.r(i1139[1], i1139[2], 0, i1138, 'value')
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1143 = data
  i1142.functionName = i1143[0]
  i1142.floatParameter = i1143[1]
  i1142.intParameter = i1143[2]
  i1142.stringParameter = i1143[3]
  request.r(i1143[4], i1143[5], 0, i1142, 'objectReferenceParameter')
  i1142.time = i1143[6]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1145 = data
  i1144.center = new pc.Vec3( i1145[0], i1145[1], i1145[2] )
  i1144.extends = new pc.Vec3( i1145[3], i1145[4], i1145[5] )
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1149 = data
  var i1151 = i1149[0]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( i1151[i + 0] );
  }
  i1148.genericBindings = i1150
  var i1153 = i1149[1]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( i1153[i + 0] );
  }
  i1148.pptrCurveMapping = i1152
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1155 = data
  i1154.name = i1155[0]
  i1154.ascent = i1155[1]
  i1154.originalLineHeight = i1155[2]
  i1154.fontSize = i1155[3]
  var i1157 = i1155[4]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1157[i + 0]) );
  }
  i1154.characterInfo = i1156
  request.r(i1155[5], i1155[6], 0, i1154, 'texture')
  i1154.originalFontSize = i1155[7]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1161 = data
  i1160.index = i1161[0]
  i1160.advance = i1161[1]
  i1160.bearing = i1161[2]
  i1160.glyphWidth = i1161[3]
  i1160.glyphHeight = i1161[4]
  i1160.minX = i1161[5]
  i1160.maxX = i1161[6]
  i1160.minY = i1161[7]
  i1160.maxY = i1161[8]
  i1160.uvBottomLeftX = i1161[9]
  i1160.uvBottomLeftY = i1161[10]
  i1160.uvBottomRightX = i1161[11]
  i1160.uvBottomRightY = i1161[12]
  i1160.uvTopLeftX = i1161[13]
  i1160.uvTopLeftY = i1161[14]
  i1160.uvTopRightX = i1161[15]
  i1160.uvTopRightY = i1161[16]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1163 = data
  i1162.name = i1163[0]
  var i1165 = i1163[1]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1165[i + 0]) );
  }
  i1162.layers = i1164
  var i1167 = i1163[2]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1167[i + 0]) );
  }
  i1162.parameters = i1166
  i1162.animationClips = i1163[3]
  i1162.avatarUnsupported = i1163[4]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1171 = data
  i1170.name = i1171[0]
  i1170.defaultWeight = i1171[1]
  i1170.blendingMode = i1171[2]
  i1170.avatarMask = i1171[3]
  i1170.syncedLayerIndex = i1171[4]
  i1170.syncedLayerAffectsTiming = !!i1171[5]
  i1170.syncedLayers = i1171[6]
  i1170.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1171[7], i1170.stateMachine)
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1173 = data
  i1172.id = i1173[0]
  i1172.name = i1173[1]
  i1172.path = i1173[2]
  var i1175 = i1173[3]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1175[i + 0]) );
  }
  i1172.states = i1174
  var i1177 = i1173[4]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1177[i + 0]) );
  }
  i1172.machines = i1176
  var i1179 = i1173[5]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1179[i + 0]) );
  }
  i1172.entryStateTransitions = i1178
  var i1181 = i1173[6]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1181[i + 0]) );
  }
  i1172.exitStateTransitions = i1180
  var i1183 = i1173[7]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1183[i + 0]) );
  }
  i1172.anyStateTransitions = i1182
  i1172.defaultStateId = i1173[8]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1187 = data
  i1186.id = i1187[0]
  i1186.name = i1187[1]
  i1186.cycleOffset = i1187[2]
  i1186.cycleOffsetParameter = i1187[3]
  i1186.cycleOffsetParameterActive = !!i1187[4]
  i1186.mirror = !!i1187[5]
  i1186.mirrorParameter = i1187[6]
  i1186.mirrorParameterActive = !!i1187[7]
  i1186.motionId = i1187[8]
  i1186.nameHash = i1187[9]
  i1186.fullPathHash = i1187[10]
  i1186.speed = i1187[11]
  i1186.speedParameter = i1187[12]
  i1186.speedParameterActive = !!i1187[13]
  i1186.tag = i1187[14]
  i1186.tagHash = i1187[15]
  i1186.writeDefaultValues = !!i1187[16]
  var i1189 = i1187[17]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 2) {
  request.r(i1189[i + 0], i1189[i + 1], 2, i1188, '')
  }
  i1186.behaviours = i1188
  var i1191 = i1187[18]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1191[i + 0]) );
  }
  i1186.transitions = i1190
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1197 = data
  i1196.fullPath = i1197[0]
  i1196.canTransitionToSelf = !!i1197[1]
  i1196.duration = i1197[2]
  i1196.exitTime = i1197[3]
  i1196.hasExitTime = !!i1197[4]
  i1196.hasFixedDuration = !!i1197[5]
  i1196.interruptionSource = i1197[6]
  i1196.offset = i1197[7]
  i1196.orderedInterruption = !!i1197[8]
  i1196.destinationStateId = i1197[9]
  i1196.isExit = !!i1197[10]
  i1196.mute = !!i1197[11]
  i1196.solo = !!i1197[12]
  var i1199 = i1197[13]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1199[i + 0]) );
  }
  i1196.conditions = i1198
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1205 = data
  i1204.destinationStateId = i1205[0]
  i1204.isExit = !!i1205[1]
  i1204.mute = !!i1205[2]
  i1204.solo = !!i1205[3]
  var i1207 = i1205[4]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1207[i + 0]) );
  }
  i1204.conditions = i1206
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1211 = data
  i1210.defaultBool = !!i1211[0]
  i1210.defaultFloat = i1211[1]
  i1210.defaultInt = i1211[2]
  i1210.name = i1211[3]
  i1210.nameHash = i1211[4]
  i1210.type = i1211[5]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1213 = data
  i1212.name = i1213[0]
  i1212.bytes64 = i1213[1]
  i1212.data = i1213[2]
  return i1212
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1215 = data
  i1214.hashCode = i1215[0]
  request.r(i1215[1], i1215[2], 0, i1214, 'material')
  i1214.materialHashCode = i1215[3]
  request.r(i1215[4], i1215[5], 0, i1214, 'atlas')
  i1214.normalStyle = i1215[6]
  i1214.normalSpacingOffset = i1215[7]
  i1214.boldStyle = i1215[8]
  i1214.boldSpacing = i1215[9]
  i1214.italicStyle = i1215[10]
  i1214.tabSize = i1215[11]
  i1214.m_Version = i1215[12]
  i1214.m_SourceFontFileGUID = i1215[13]
  request.r(i1215[14], i1215[15], 0, i1214, 'm_SourceFontFile_EditorRef')
  request.r(i1215[16], i1215[17], 0, i1214, 'm_SourceFontFile')
  i1214.m_AtlasPopulationMode = i1215[18]
  i1214.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1215[19], i1214.m_FaceInfo)
  var i1217 = i1215[20]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.add(request.d('UnityEngine.TextCore.Glyph', i1217[i + 0]));
  }
  i1214.m_GlyphTable = i1216
  var i1219 = i1215[21]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.add(request.d('TMPro.TMP_Character', i1219[i + 0]));
  }
  i1214.m_CharacterTable = i1218
  var i1221 = i1215[22]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 2) {
  request.r(i1221[i + 0], i1221[i + 1], 2, i1220, '')
  }
  i1214.m_AtlasTextures = i1220
  i1214.m_AtlasTextureIndex = i1215[23]
  i1214.m_IsMultiAtlasTexturesEnabled = !!i1215[24]
  i1214.m_ClearDynamicDataOnBuild = !!i1215[25]
  var i1223 = i1215[26]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.add(request.d('UnityEngine.TextCore.GlyphRect', i1223[i + 0]));
  }
  i1214.m_UsedGlyphRects = i1222
  var i1225 = i1215[27]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.add(request.d('UnityEngine.TextCore.GlyphRect', i1225[i + 0]));
  }
  i1214.m_FreeGlyphRects = i1224
  i1214.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1215[28], i1214.m_fontInfo)
  i1214.m_AtlasWidth = i1215[29]
  i1214.m_AtlasHeight = i1215[30]
  i1214.m_AtlasPadding = i1215[31]
  i1214.m_AtlasRenderMode = i1215[32]
  var i1227 = i1215[33]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.add(request.d('TMPro.TMP_Glyph', i1227[i + 0]));
  }
  i1214.m_glyphInfoList = i1226
  i1214.m_KerningTable = request.d('TMPro.KerningTable', i1215[34], i1214.m_KerningTable)
  i1214.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1215[35], i1214.m_FontFeatureTable)
  var i1229 = i1215[36]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1229.length; i += 2) {
  request.r(i1229[i + 0], i1229[i + 1], 1, i1228, '')
  }
  i1214.fallbackFontAssets = i1228
  var i1231 = i1215[37]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1231.length; i += 2) {
  request.r(i1231[i + 0], i1231[i + 1], 1, i1230, '')
  }
  i1214.m_FallbackFontAssetTable = i1230
  i1214.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1215[38], i1214.m_CreationSettings)
  var i1233 = i1215[39]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('TMPro.TMP_FontWeightPair', i1233[i + 0]) );
  }
  i1214.m_FontWeightTable = i1232
  var i1235 = i1215[40]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('TMPro.TMP_FontWeightPair', i1235[i + 0]) );
  }
  i1214.fontWeights = i1234
  return i1214
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1237 = data
  i1236.m_FaceIndex = i1237[0]
  i1236.m_FamilyName = i1237[1]
  i1236.m_StyleName = i1237[2]
  i1236.m_PointSize = i1237[3]
  i1236.m_Scale = i1237[4]
  i1236.m_UnitsPerEM = i1237[5]
  i1236.m_LineHeight = i1237[6]
  i1236.m_AscentLine = i1237[7]
  i1236.m_CapLine = i1237[8]
  i1236.m_MeanLine = i1237[9]
  i1236.m_Baseline = i1237[10]
  i1236.m_DescentLine = i1237[11]
  i1236.m_SuperscriptOffset = i1237[12]
  i1236.m_SuperscriptSize = i1237[13]
  i1236.m_SubscriptOffset = i1237[14]
  i1236.m_SubscriptSize = i1237[15]
  i1236.m_UnderlineOffset = i1237[16]
  i1236.m_UnderlineThickness = i1237[17]
  i1236.m_StrikethroughOffset = i1237[18]
  i1236.m_StrikethroughThickness = i1237[19]
  i1236.m_TabWidth = i1237[20]
  return i1236
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1240 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1241 = data
  i1240.m_Index = i1241[0]
  i1240.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1241[1], i1240.m_Metrics)
  i1240.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1241[2], i1240.m_GlyphRect)
  i1240.m_Scale = i1241[3]
  i1240.m_AtlasIndex = i1241[4]
  i1240.m_ClassDefinitionType = i1241[5]
  return i1240
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1243 = data
  i1242.m_Width = i1243[0]
  i1242.m_Height = i1243[1]
  i1242.m_HorizontalBearingX = i1243[2]
  i1242.m_HorizontalBearingY = i1243[3]
  i1242.m_HorizontalAdvance = i1243[4]
  return i1242
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1245 = data
  i1244.m_X = i1245[0]
  i1244.m_Y = i1245[1]
  i1244.m_Width = i1245[2]
  i1244.m_Height = i1245[3]
  return i1244
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.TMP_Character' )
  var i1249 = data
  i1248.m_ElementType = i1249[0]
  i1248.m_Unicode = i1249[1]
  i1248.m_GlyphIndex = i1249[2]
  i1248.m_Scale = i1249[3]
  return i1248
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1255 = data
  i1254.Name = i1255[0]
  i1254.PointSize = i1255[1]
  i1254.Scale = i1255[2]
  i1254.CharacterCount = i1255[3]
  i1254.LineHeight = i1255[4]
  i1254.Baseline = i1255[5]
  i1254.Ascender = i1255[6]
  i1254.CapHeight = i1255[7]
  i1254.Descender = i1255[8]
  i1254.CenterLine = i1255[9]
  i1254.SuperscriptOffset = i1255[10]
  i1254.SubscriptOffset = i1255[11]
  i1254.SubSize = i1255[12]
  i1254.Underline = i1255[13]
  i1254.UnderlineThickness = i1255[14]
  i1254.strikethrough = i1255[15]
  i1254.strikethroughThickness = i1255[16]
  i1254.TabWidth = i1255[17]
  i1254.Padding = i1255[18]
  i1254.AtlasWidth = i1255[19]
  i1254.AtlasHeight = i1255[20]
  return i1254
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1259 = data
  i1258.id = i1259[0]
  i1258.x = i1259[1]
  i1258.y = i1259[2]
  i1258.width = i1259[3]
  i1258.height = i1259[4]
  i1258.xOffset = i1259[5]
  i1258.yOffset = i1259[6]
  i1258.xAdvance = i1259[7]
  i1258.scale = i1259[8]
  return i1258
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.KerningTable' )
  var i1261 = data
  var i1263 = i1261[0]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.add(request.d('TMPro.KerningPair', i1263[i + 0]));
  }
  i1260.kerningPairs = i1262
  return i1260
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.KerningPair' )
  var i1267 = data
  i1266.xOffset = i1267[0]
  i1266.m_FirstGlyph = i1267[1]
  i1266.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1267[2], i1266.m_FirstGlyphAdjustments)
  i1266.m_SecondGlyph = i1267[3]
  i1266.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1267[4], i1266.m_SecondGlyphAdjustments)
  i1266.m_IgnoreSpacingAdjustments = !!i1267[5]
  return i1266
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1269 = data
  var i1271 = i1269[0]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1271[i + 0]));
  }
  i1268.m_GlyphPairAdjustmentRecords = i1270
  return i1268
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1274 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1275 = data
  i1274.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1275[0], i1274.m_FirstAdjustmentRecord)
  i1274.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1275[1], i1274.m_SecondAdjustmentRecord)
  i1274.m_FeatureLookupFlags = i1275[2]
  return i1274
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1279 = data
  i1278.sourceFontFileName = i1279[0]
  i1278.sourceFontFileGUID = i1279[1]
  i1278.pointSizeSamplingMode = i1279[2]
  i1278.pointSize = i1279[3]
  i1278.padding = i1279[4]
  i1278.packingMode = i1279[5]
  i1278.atlasWidth = i1279[6]
  i1278.atlasHeight = i1279[7]
  i1278.characterSetSelectionMode = i1279[8]
  i1278.characterSequence = i1279[9]
  i1278.referencedFontAssetGUID = i1279[10]
  i1278.referencedTextAssetGUID = i1279[11]
  i1278.fontStyle = i1279[12]
  i1278.fontStyleModifier = i1279[13]
  i1278.renderMode = i1279[14]
  i1278.includeFontFeatures = !!i1279[15]
  return i1278
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1283 = data
  request.r(i1283[0], i1283[1], 0, i1282, 'regularTypeface')
  request.r(i1283[2], i1283[3], 0, i1282, 'italicTypeface')
  return i1282
}

Deserializers["ItemData"] = function (request, data, root) {
  var i1284 = root || request.c( 'ItemData' )
  var i1285 = data
  i1284.itemName = i1285[0]
  request.r(i1285[1], i1285[2], 0, i1284, 'itemIcon')
  i1284.ItemCount = i1285[3]
  request.r(i1285[4], i1285[5], 0, i1284, 'collectItemSprite')
  i1284.color = i1285[6]
  request.r(i1285[7], i1285[8], 0, i1284, 'DecorationSprite')
  return i1284
}

Deserializers["TileData"] = function (request, data, root) {
  var i1286 = root || request.c( 'TileData' )
  var i1287 = data
  i1286.tileName = i1287[0]
  request.r(i1287[1], i1287[2], 0, i1286, 'tileSprite')
  i1286.isPowerup = !!i1287[3]
  return i1286
}

Deserializers["DynamitePowerup"] = function (request, data, root) {
  var i1288 = root || request.c( 'DynamitePowerup' )
  var i1289 = data
  i1288.explosionRadius = i1289[0]
  i1288.tileName = i1289[1]
  request.r(i1289[2], i1289[3], 0, i1288, 'tileSprite')
  i1288.isPowerup = !!i1289[4]
  return i1288
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i1290 = root || request.c( 'AudioLibrary' )
  var i1291 = data
  var i1293 = i1291[0]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.add(request.d('AudioLibrary+ClipEntry', i1293[i + 0]));
  }
  i1290.clips = i1292
  return i1290
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i1296 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i1297 = data
  i1296.key = i1297[0]
  i1296.channel = i1297[1]
  request.r(i1297[2], i1297[3], 0, i1296, 'clip')
  i1296.volume = i1297[4]
  i1296.loop = !!i1297[5]
  return i1296
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.TMP_Settings' )
  var i1299 = data
  i1298.m_enableWordWrapping = !!i1299[0]
  i1298.m_enableKerning = !!i1299[1]
  i1298.m_enableExtraPadding = !!i1299[2]
  i1298.m_enableTintAllSprites = !!i1299[3]
  i1298.m_enableParseEscapeCharacters = !!i1299[4]
  i1298.m_EnableRaycastTarget = !!i1299[5]
  i1298.m_GetFontFeaturesAtRuntime = !!i1299[6]
  i1298.m_missingGlyphCharacter = i1299[7]
  i1298.m_warningsDisabled = !!i1299[8]
  request.r(i1299[9], i1299[10], 0, i1298, 'm_defaultFontAsset')
  i1298.m_defaultFontAssetPath = i1299[11]
  i1298.m_defaultFontSize = i1299[12]
  i1298.m_defaultAutoSizeMinRatio = i1299[13]
  i1298.m_defaultAutoSizeMaxRatio = i1299[14]
  i1298.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1299[15], i1299[16] )
  i1298.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1299[17], i1299[18] )
  i1298.m_autoSizeTextContainer = !!i1299[19]
  i1298.m_IsTextObjectScaleStatic = !!i1299[20]
  var i1301 = i1299[21]
  var i1300 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1301.length; i += 2) {
  request.r(i1301[i + 0], i1301[i + 1], 1, i1300, '')
  }
  i1298.m_fallbackFontAssets = i1300
  i1298.m_matchMaterialPreset = !!i1299[22]
  request.r(i1299[23], i1299[24], 0, i1298, 'm_defaultSpriteAsset')
  i1298.m_defaultSpriteAssetPath = i1299[25]
  i1298.m_enableEmojiSupport = !!i1299[26]
  i1298.m_MissingCharacterSpriteUnicode = i1299[27]
  i1298.m_defaultColorGradientPresetsPath = i1299[28]
  request.r(i1299[29], i1299[30], 0, i1298, 'm_defaultStyleSheet')
  i1298.m_StyleSheetsResourcePath = i1299[31]
  request.r(i1299[32], i1299[33], 0, i1298, 'm_leadingCharacters')
  request.r(i1299[34], i1299[35], 0, i1298, 'm_followingCharacters')
  i1298.m_UseModernHangulLineBreakingRules = !!i1299[36]
  return i1298
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1303 = data
  i1302.m_GlyphIndex = i1303[0]
  i1302.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1303[1], i1302.m_GlyphValueRecord)
  return i1302
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1305 = data
  i1304.m_XPlacement = i1305[0]
  i1304.m_YPlacement = i1305[1]
  i1304.m_XAdvance = i1305[2]
  i1304.m_YAdvance = i1305[3]
  return i1304
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1307 = data
  i1306.hashCode = i1307[0]
  request.r(i1307[1], i1307[2], 0, i1306, 'material')
  i1306.materialHashCode = i1307[3]
  request.r(i1307[4], i1307[5], 0, i1306, 'spriteSheet')
  var i1309 = i1307[6]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.add(request.d('TMPro.TMP_Sprite', i1309[i + 0]));
  }
  i1306.spriteInfoList = i1308
  var i1311 = i1307[7]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1311.length; i += 2) {
  request.r(i1311[i + 0], i1311[i + 1], 1, i1310, '')
  }
  i1306.fallbackSpriteAssets = i1310
  i1306.m_Version = i1307[8]
  i1306.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1307[9], i1306.m_FaceInfo)
  var i1313 = i1307[10]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.add(request.d('TMPro.TMP_SpriteCharacter', i1313[i + 0]));
  }
  i1306.m_SpriteCharacterTable = i1312
  var i1315 = i1307[11]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.add(request.d('TMPro.TMP_SpriteGlyph', i1315[i + 0]));
  }
  i1306.m_SpriteGlyphTable = i1314
  return i1306
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1318 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1319 = data
  i1318.name = i1319[0]
  i1318.hashCode = i1319[1]
  i1318.unicode = i1319[2]
  i1318.pivot = new pc.Vec2( i1319[3], i1319[4] )
  request.r(i1319[5], i1319[6], 0, i1318, 'sprite')
  i1318.id = i1319[7]
  i1318.x = i1319[8]
  i1318.y = i1319[9]
  i1318.width = i1319[10]
  i1318.height = i1319[11]
  i1318.xOffset = i1319[12]
  i1318.yOffset = i1319[13]
  i1318.xAdvance = i1319[14]
  i1318.scale = i1319[15]
  return i1318
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1324 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1325 = data
  i1324.m_Name = i1325[0]
  i1324.m_HashCode = i1325[1]
  i1324.m_ElementType = i1325[2]
  i1324.m_Unicode = i1325[3]
  i1324.m_GlyphIndex = i1325[4]
  i1324.m_Scale = i1325[5]
  return i1324
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1328 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1329 = data
  request.r(i1329[0], i1329[1], 0, i1328, 'sprite')
  i1328.m_Index = i1329[2]
  i1328.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1329[3], i1328.m_Metrics)
  i1328.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1329[4], i1328.m_GlyphRect)
  i1328.m_Scale = i1329[5]
  i1328.m_AtlasIndex = i1329[6]
  i1328.m_ClassDefinitionType = i1329[7]
  return i1328
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1330 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1331 = data
  var i1333 = i1331[0]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.add(request.d('TMPro.TMP_Style', i1333[i + 0]));
  }
  i1330.m_StyleList = i1332
  return i1330
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1336 = root || request.c( 'TMPro.TMP_Style' )
  var i1337 = data
  i1336.m_Name = i1337[0]
  i1336.m_HashCode = i1337[1]
  i1336.m_OpeningDefinition = i1337[2]
  i1336.m_ClosingDefinition = i1337[3]
  i1336.m_OpeningTagArray = i1337[4]
  i1336.m_ClosingTagArray = i1337[5]
  i1336.m_OpeningTagUnicodeArray = i1337[6]
  i1336.m_ClosingTagUnicodeArray = i1337[7]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1339 = data
  var i1341 = i1339[0]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1341[i + 0]) );
  }
  i1338.files = i1340
  i1338.componentToPrefabIds = i1339[1]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1345 = data
  i1344.path = i1345[0]
  request.r(i1345[1], i1345[2], 0, i1344, 'unityObject')
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1347 = data
  var i1349 = i1347[0]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1349[i + 0]) );
  }
  i1346.scriptsExecutionOrder = i1348
  var i1351 = i1347[1]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1351[i + 0]) );
  }
  i1346.sortingLayers = i1350
  var i1353 = i1347[2]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1353[i + 0]) );
  }
  i1346.cullingLayers = i1352
  i1346.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1347[3], i1346.timeSettings)
  i1346.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1347[4], i1346.physicsSettings)
  i1346.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1347[5], i1346.physics2DSettings)
  i1346.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1347[6], i1346.qualitySettings)
  i1346.enableRealtimeShadows = !!i1347[7]
  i1346.enableAutoInstancing = !!i1347[8]
  i1346.enableDynamicBatching = !!i1347[9]
  i1346.lightmapEncodingQuality = i1347[10]
  i1346.desiredColorSpace = i1347[11]
  var i1355 = i1347[12]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( i1355[i + 0] );
  }
  i1346.allTags = i1354
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1359 = data
  i1358.name = i1359[0]
  i1358.value = i1359[1]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1363 = data
  i1362.id = i1363[0]
  i1362.name = i1363[1]
  i1362.value = i1363[2]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1367 = data
  i1366.id = i1367[0]
  i1366.name = i1367[1]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1369 = data
  i1368.fixedDeltaTime = i1369[0]
  i1368.maximumDeltaTime = i1369[1]
  i1368.timeScale = i1369[2]
  i1368.maximumParticleTimestep = i1369[3]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1371 = data
  i1370.gravity = new pc.Vec3( i1371[0], i1371[1], i1371[2] )
  i1370.defaultSolverIterations = i1371[3]
  i1370.bounceThreshold = i1371[4]
  i1370.autoSyncTransforms = !!i1371[5]
  i1370.autoSimulation = !!i1371[6]
  var i1373 = i1371[7]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1373[i + 0]) );
  }
  i1370.collisionMatrix = i1372
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1377 = data
  i1376.enabled = !!i1377[0]
  i1376.layerId = i1377[1]
  i1376.otherLayerId = i1377[2]
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1379 = data
  request.r(i1379[0], i1379[1], 0, i1378, 'material')
  i1378.gravity = new pc.Vec2( i1379[2], i1379[3] )
  i1378.positionIterations = i1379[4]
  i1378.velocityIterations = i1379[5]
  i1378.velocityThreshold = i1379[6]
  i1378.maxLinearCorrection = i1379[7]
  i1378.maxAngularCorrection = i1379[8]
  i1378.maxTranslationSpeed = i1379[9]
  i1378.maxRotationSpeed = i1379[10]
  i1378.baumgarteScale = i1379[11]
  i1378.baumgarteTOIScale = i1379[12]
  i1378.timeToSleep = i1379[13]
  i1378.linearSleepTolerance = i1379[14]
  i1378.angularSleepTolerance = i1379[15]
  i1378.defaultContactOffset = i1379[16]
  i1378.autoSimulation = !!i1379[17]
  i1378.queriesHitTriggers = !!i1379[18]
  i1378.queriesStartInColliders = !!i1379[19]
  i1378.callbacksOnDisable = !!i1379[20]
  i1378.reuseCollisionCallbacks = !!i1379[21]
  i1378.autoSyncTransforms = !!i1379[22]
  var i1381 = i1379[23]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1381[i + 0]) );
  }
  i1378.collisionMatrix = i1380
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1385 = data
  i1384.enabled = !!i1385[0]
  i1384.layerId = i1385[1]
  i1384.otherLayerId = i1385[2]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1387 = data
  var i1389 = i1387[0]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1389[i + 0]) );
  }
  i1386.qualityLevels = i1388
  var i1391 = i1387[1]
  var i1390 = []
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.push( i1391[i + 0] );
  }
  i1386.names = i1390
  i1386.shadows = i1387[2]
  i1386.anisotropicFiltering = i1387[3]
  i1386.antiAliasing = i1387[4]
  i1386.lodBias = i1387[5]
  i1386.shadowCascades = i1387[6]
  i1386.shadowDistance = i1387[7]
  i1386.shadowmaskMode = i1387[8]
  i1386.shadowProjection = i1387[9]
  i1386.shadowResolution = i1387[10]
  i1386.softParticles = !!i1387[11]
  i1386.softVegetation = !!i1387[12]
  i1386.activeColorSpace = i1387[13]
  i1386.desiredColorSpace = i1387[14]
  i1386.masterTextureLimit = i1387[15]
  i1386.maxQueuedFrames = i1387[16]
  i1386.particleRaycastBudget = i1387[17]
  i1386.pixelLightCount = i1387[18]
  i1386.realtimeReflectionProbes = !!i1387[19]
  i1386.shadowCascade2Split = i1387[20]
  i1386.shadowCascade4Split = new pc.Vec3( i1387[21], i1387[22], i1387[23] )
  i1386.streamingMipmapsActive = !!i1387[24]
  i1386.vSyncCount = i1387[25]
  i1386.asyncUploadBufferSize = i1387[26]
  i1386.asyncUploadTimeSlice = i1387[27]
  i1386.billboardsFaceCameraPosition = !!i1387[28]
  i1386.shadowNearPlaneOffset = i1387[29]
  i1386.streamingMipmapsMemoryBudget = i1387[30]
  i1386.maximumLODLevel = i1387[31]
  i1386.streamingMipmapsAddAllCameras = !!i1387[32]
  i1386.streamingMipmapsMaxLevelReduction = i1387[33]
  i1386.streamingMipmapsRenderersPerFrame = i1387[34]
  i1386.resolutionScalingFixedDPIFactor = i1387[35]
  i1386.streamingMipmapsMaxFileIORequests = i1387[36]
  i1386.currentQualityLevel = i1387[37]
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1397 = data
  i1396.weight = i1397[0]
  i1396.vertices = i1397[1]
  i1396.normals = i1397[2]
  i1396.tangents = i1397[3]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1401 = data
  i1400.mode = i1401[0]
  i1400.parameter = i1401[1]
  i1400.threshold = i1401[2]
  return i1400
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1402 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1403 = data
  i1402.xPlacement = i1403[0]
  i1402.yPlacement = i1403[1]
  i1402.xAdvance = i1403[2]
  i1402.yAdvance = i1403[3]
  return i1402
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[27],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[80],"88":[80],"89":[80],"90":[80],"91":[80],"92":[80],"93":[27],"94":[95],"96":[97],"98":[97],"29":[0],"21":[17],"99":[17],"100":[17],"101":[102],"103":[47],"104":[27],"105":[102],"106":[0],"107":[0],"31":[29],"4":[1,0],"108":[0],"30":[29],"109":[0],"44":[0],"42":[0],"110":[0],"111":[0],"112":[0],"113":[0],"45":[0],"114":[0],"115":[1,0],"116":[0],"117":[0],"118":[0],"119":[0],"120":[1,0],"121":[0],"122":[51],"123":[51],"52":[51],"124":[51],"125":[27],"126":[27],"127":[128],"129":[27],"130":[131],"132":[0],"133":[1,0],"134":[95],"135":[1,0],"136":[48,95],"137":[95],"138":[95,139],"140":[72],"141":[80],"142":[131],"143":[144],"145":[0],"146":[95,0],"5":[0,1],"147":[0],"148":[1,0],"149":[95],"150":[1,0],"151":[0],"152":[102]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","Item","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.Sprite","ItemData","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","TileCell","TileData","Tile","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Light","CartoonFX.CFXR_Effect","AnimatedTile","UnityEngine.GameObject","UnityEngine.TrailRenderer","StateEvents","PositionTracking","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","BasicFade","UnityEngine.CanvasGroup","AppearAnimation","PlayerGuide","UnityEngine.UI.Button","GameManager","RectAnimator","TileManager","DynamitePowerup","DynamiteEffect","UnityEngine.UI.HorizontalLayoutGroup","UIMoveTo","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Mask","AnimatedTileSpawner","UnityEngine.SpriteRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MergeHands","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","AudioManager","AudioLibrary","UnityEngine.Font","UnityEngine.AudioClip","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CartoonFX.CFXR_EmissionBySurface","CartoonFX.CFXR_ParticleText","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Kino.Bloom","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.3f1";

Deserializers.productName = "Piggy Kingdom - Renovation";

Deserializers.lunaInitializationTime = "09/29/2025 07:36:59";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Renovation";

Deserializers.lunaAppID = "32752";

Deserializers.projectId = "bab41f24a77b7a944b71277894eff5d3";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.4\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1796";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5484";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "9e4c8057-9a6d-4d84-b2c9-e9c75be4f4dd";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

